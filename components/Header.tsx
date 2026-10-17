import React from "react";

export default function Header(
  props: React.DetailedHTMLProps<
    React.HTMLProps<HTMLDivElement>,
    HTMLDivElement
  > & { title: string; titleClassName?: string },
) {
  const {
    title,
    titleClassName = "text-5xl sm:text-8xl lg:text-9xl",
    children,
    ...rest
  } = props;

  return (
    <section
      id="header"
      className="bg-black corner-blob text-orange-100 py-4 px-4"
      {...rest}
    >
      <div className="container py-5 mx-auto ">
        <h1
          className={`font-sans ${titleClassName} font-black uppercase mb-5 lg:w-1/2`}
        >
          {title}
        </h1>
        <div className="text-xl md:text-2xl prose max-w-screen-md">
          {children}
        </div>
      </div>
    </section>
  );
}
