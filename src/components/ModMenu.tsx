import { Button } from 'react-bulma-components';

type DeleteButtonProps = {
  onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <Button color="danger" onClick={onClick}>
      Delete
    </Button>
  )
}