export default function Modal({ children }: { children: React.ReactNode }) {
    return (
        <div className="fixed inset-0 z-50 flex h-full w-full cursor-default items-center justify-center bg-gray bg-opacity-50 backdrop-blur-xs">
            {children}
        </div>
    );
}