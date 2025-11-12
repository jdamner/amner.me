export default function TimelineButtonAndBar({
  last = false,
}: {
  last?: boolean;
}) {
  const buttonClasses = [
    "absolute",
    "w-4",
    "h-4",
    "mt-2.5",
    "-top-2.5",
    "bg-orange-600",
    "rounded-full",
  ];

  const barClasses = ["mt-1.5", "w-full", "h-1"];

  if (last) {
    barClasses.push("bg-gradient-to-r from-orange-600 to-transparent");
  } else {
    barClasses.push("bg-orange-600");
  }
  return (
    <>
      <div className={barClasses.join(" ")} />
      <div className={buttonClasses.join(" ")} />
    </>
  );
}
