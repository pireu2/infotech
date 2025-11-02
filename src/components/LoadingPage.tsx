import { Spinner } from "./ui/spinner";

export default function LoadingPage() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0c0d1d]">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full border-4 border-purple-500/20 animate-pulse"
            style={{ width: "120px", height: "120px" }}
          />

          <div
            className="absolute inset-0 m-2 rounded-full border-4 border-t-purple-500 border-r-blue-400 border-b-transparent border-l-transparent animate-spin"
            style={{
              width: "104px",
              height: "104px",
              animationDuration: "1.5s",
            }}
          />

          <div
            className="flex items-center justify-center"
            style={{ width: "120px", height: "120px" }}
          >
            <Spinner className="size-12 text-purple-400" />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent font-display mb-2">
            Loading InfoTech
          </h2>
          <p className="text-gray-400 text-sm">Preparing your experience...</p>
        </div>
      </div>
    </div>
  );
}
