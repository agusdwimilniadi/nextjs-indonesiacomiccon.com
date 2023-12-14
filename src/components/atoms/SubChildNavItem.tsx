const SubChildNavItem = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <div className="flex gap-3 text-base hover:bg-custom-blue-secondary roudedlg p-3 items-center">
      {icon}
      {label}
    </div>
  );
};

export default SubChildNavItem;
