import React from "react";

type Props = {
  apartado: string;
}

function ButtonMenu(props: Props) {
  return(
    <div>
      <a href="">{props.apartado}</a>
    </div>
  );
}

export default ButtonMenu;