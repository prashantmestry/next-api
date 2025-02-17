const AuthTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ border: "1px soilid green" }} className="p-2 flex">
      <div>{children}</div>
      <div>This is right side data common for Login and Register page</div>
    </div>
  );
};

export default AuthTemplate;
