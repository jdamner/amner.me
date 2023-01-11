import Button from "./Button";

export default function TabButton({ onClick, name, active, index }: { onClick: () => void, name: string, active: boolean, index: number }) {

    const classes = [
        "text-xl md:text-3xl font-bold mr-3 md:mr-0",
        active ? "text-gray-900 dark:text-gray-300" : "text-gray-300 dark:text-gray-500"
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