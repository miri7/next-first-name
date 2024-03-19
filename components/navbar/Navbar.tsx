import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from ".."


const navItems = [
  {path:'/about',text:'About'},
  {path:'/pricing',text:'Pricing'},
  {path:'/contact',text:'Contact'}
]

export const Navbar = () => {
  return (
    <AppBar position="static"  sx={{backgroundColor:'#0000FF',margin: '2px', padding: '1rem'}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           
        <Link href={"/"} style={{flex:'1', marginRight:'2px' }}>
            <HomeIcon className="mr-2" /> 
            <span>Home</span> 
        </Link>
        </Typography>
        {navItems.map(navItem =>(
          <ActiveLink key={navItem.path} {...navItem}/>
        ))}
        
      </Toolbar>
    </AppBar>
  )
}
