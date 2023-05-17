import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

export default function GotIcon() {
  return (
    <IconButton>
      <FontAwesomeIcon icon={faFloppyDisk} />
    </IconButton>
  );
}
