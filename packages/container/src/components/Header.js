import React from "react";
import { TopBar, Box } from "nghiata-mfe-base-components";
import { useLocation, useNavigate } from "react-router-dom";
import { find } from "lodash";

const items = [
  {
    id: "0",
    url: "/",
    name: "Home",
  },
  {
    id: "1",
    url: "/works",
    name: "Works",
  },
  {
    id: "2",
    url: "/about",
    name: "About This Website",
  },
];

export default function Header({ isSignedIn, onSignOut }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <React.Fragment>
      <Box height={"100px"} sx={{ overflowY: "auto" }}>
        <TopBar
          language="en"
          onChangeLanguage={(language) => {
            // alert(language);
          }}
          onChangeColorMode={() => {
            // alert("trans.functional");
          }}
          activeItem={find(items, (item) => item.url === pathname).id}
          onClick={(url) => navigate(url)}
          items={items}
        />
      </Box>
    </React.Fragment>
  );
}
