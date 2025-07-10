export default function Projects() {
  return (
    <div className="size-full flex flex-col items-center">
      <h2 className="text-7xl">Projects</h2>
      <progress
        className="progress progress-primary w-[300px] mb-[100px] mt-[10px]"
        value="100"
        max="100"
      ></progress>
      <div>
        <div className="size-[200px] border-2 border-solid"></div>
      </div>
    </div>
  );
}
