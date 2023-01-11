import Button from "./Button";

export default function TabButton({ onClick, name, active, index }: { onClick: () => void, name: string, active: boolean, index: number }) {

    const classes = [
        "text-xl md:text-3xl font-bold",
        active ? "text-gray-900" : "text-gray-300"
    ]

    return (
        <Button 
            onClick={onClick} 
            className={classes.join(" ")}
            aria-current={active} 
            tabIndex={index}>
            {name}
        </Button>
    );
}