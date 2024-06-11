import LeftSideBar from "@/components/LeftSideBar";

interface PageLayoutProps {
  children: React.ReactNode;
}

const pageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div>
      <main>
        <LeftSideBar />
        {children}
        <p className="text-white-1">Right SideBar</p>
      </main>
    </div>
  );
};

export default pageLayout;
