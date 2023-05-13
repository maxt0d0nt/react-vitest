type AccordionProps = {
    title: string;
    children: React.ReactNode;
};

function Accordion({title, children}: AccordionProps) {
  return (
  <>
    <h3>
        {title}
    </h3>
    <div>
        {children}
    </div>
  </>
  )
}

export default Accordion