export const DataTableHeaderColumnActions = ({
  title = "Ações",
  className,
}: {
  title: string;
  className?: string;
}) => (
  <div className="h-full flex flex-col">
    <span className="h-full flex w-full items-center justify-center uppercase">
      {title}
    </span>
  </div>
);
