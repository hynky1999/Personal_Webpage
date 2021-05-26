import re

class Header():
    def __init__(self, name):
        self.name = name
        self.sub_headers = []

    def __eq__(self, other):
        if isinstance(other, Header):
            return self.name == other.name

        return False

    def __str__(self):
        return self.name

    def __repr__(self):
        return self.name


def extract_headers(html_content):
    h_pattern = r'<h(?P<digit>\d)(?P<args>.*?)>.*?</h(?P=digit)>'
    args_pattern = r'id\s*=\s*"(?P<id>\w+?)"'

    headers = []
    header_1 = None
    header_2 = None
    header_3 = None
    for match in re.finditer(h_pattern, html_content):
        digit = int(match.group('digit'))
        args = match.group('args')
        id_search = re.search(args_pattern, args)
        if not id_search:
            continue

        name = id_search.group('id').strip()
        if digit == 1:
            # Process aggregated header
            # Aggregate children
            if header_1:

                if header_2:
                    header_1.sub_headers.append(header_2)
                    header_2 = None
                headers.append(header_1)

            header_1 = Header(name)

        if digit == 2:

            if header_2:

                if header_1:
                    header_1.sub_headers.append(header_2)
                else:
                    headers.append(header_2)

            header_2 = Header(name)

        if digit == 3:

            header_3 = Header(name)

            if header_2:
                header_2.sub_headers.append(header_3)

            elif header_1:
                header_1.sub_headers.append(header_3)

            else:
                headers.append(header_3)

    # Add remaining headers
    if header_2:
        if header_1:
            header_1.sub_headers.append(header_2)

        else:
            headers.append(header_2)

    if header_1:
        headers.append(header_1)

    return headers
