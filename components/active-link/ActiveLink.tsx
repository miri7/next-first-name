
import Link from "next/link";
import style from './ActiveLink.module.css';
import { usePathname } from "next/navigation";


interface Props {
    path:string;
    text:string;
}

export const ActiveLink = ({path,text}:Props) => {

 
  return (
    <Link key={path} style={{ marginRight: '10px' }}  className={`${style.link}  ${style['active-link']}`}  href={path}>{text}</Link>
  )
}
