import Button from "../Button/Button"
// import { MenuContext } from "./Menu"

export default function MenuButton({ children, className, size, variant }) {
    // const { toggle } = React.useContext(MenuContext)
    return (
        <Button className={className} size={size} variant={variant} >{children}</Button>
    )
}