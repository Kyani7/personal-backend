type BulletPointProps = {
  text : string;
}
const BulletPoint = ({ text } : BulletPointProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-2 h-2 bg-[#0078BD] rounded-full shrink-0"></div>

      <p className="text-gray-900">
        {text}
      </p>
    </div>
  );
};

export default BulletPoint;