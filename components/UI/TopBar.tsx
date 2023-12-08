import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
import { Badge, Icon } from "@mui/material";
import NextLink from "next/link";

interface IMenuProfile {
  title: string;
  icon: any;
  route: string;
}

interface IPages {
  title: string;
  icon?: any;
  route: string;
}

const pages: IPages[] = [
  {
    title: "Inicio",
    route: "/",
  },
  {
    title: "Servicios",
    route: "/digitalServices",
  },
];

export const TopBar = () => {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "transparent", boxShadow: "none" }}
    >
      <Toolbar disableGutters sx={{ mx: 4 }}>
        <Box
          component={"img"}
          src="./images/logo.png"
          width={"auto"}
          height={"60px"}
          sx={{
            display: { xs: "none", md: "flex" },
            my: 2,
            mr: 1,
            cursor: "pointer",
          }}
          onClick={() => router.push("/")}
        />
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          {/* <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton> */}
          <Box
            component={"img"}
            src="./images/logo.png"
            width={"auto"}
            height={"40px"}
            sx={{
              display: { xs: "flex", md: "none" },
              my: 3,
              mr: 1,
              cursor: "pointer",
            }}
            onClick={() => router.push("/")}
          />
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map(({ title, route }) => (
              <MenuItem key={title} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{title}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
          }}
        >
          {pages.map(({ title, icon, route }) => (
            <NextLink
              key={route}
              href={route}
              passHref
              style={{ textDecoration: "none" }}
            >
              <Button
                key={title}
                onClick={() => {
                  handleCloseNavMenu(), router.push(`${route}`);
                }}
                sx={{
                  my: 2,
                  mr: 4,
                  display: "block",
                  color: router.pathname == route ? "black" : "white",
                  fontWeight: router.pathname == route ? "900" : null,
                }}
              >
                {title}
                <Badge
                  // badgeContent={title === "" ? ticketIds.length : 0}
                  color="error"
                >
                  {icon}
                </Badge>
              </Button>
            </NextLink>
          ))}
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Abrir menu">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {/* <PersonOutlineIcon sx={{ color: "white" }} /> */}
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {/* {!isLogged ? (
              <>
                {noLogged.map(({ title, icon, route }) => (
                  <NextLink
                    key={route}
                    href={route}
                    passHref
                    style={{ textDecoration: "none" }}
                  >
                    <MenuItem
                      key={title}
                      onClick={() => {
                        handleCloseUserMenu(), router.push(`${route}`);
                      }}
                    >
                      <Box sx={{ mr: 1, mt: -0.25 }}>
                        <>{icon}</>
                      </Box>
                      <Typography textAlign="center">{title}</Typography>
                    </MenuItem>
                  </NextLink>
                ))}
              </>
            ) : (
              <>
                {settings.map(({ title, icon, route }) => (
                  <NextLink
                    key={route}
                    href={route}
                    passHref
                    style={{ textDecoration: "none" }}
                  >
                    <MenuItem
                      key={title}
                      onClick={() => {
                        handleCloseUserMenu(), router.push(`${route}`);
                      }}
                      sx={{
                        bgcolor: router.pathname == route ? "#CFA53A" : null,
                        color: router.pathname == route ? "white" : "black",
                        "&:hover": {
                          bgcolor: "#EDC663",
                          color: "black",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          mr: 1,
                          mt: -0.25,
                        }}
                      >
                        <>{icon}</>
                      </Box>
                      <Typography textAlign="center">{title}</Typography>
                    </MenuItem>
                  </NextLink>
                ))}
              </>
            )} */}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
