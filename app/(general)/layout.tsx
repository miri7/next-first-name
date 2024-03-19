import { Navbar } from "@/components";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

export default function GeneralLayout({children}:{children:React.ReactNode}){
    return(
        <>
            <Navbar/>
            {children}
        </>
        
    )
}
