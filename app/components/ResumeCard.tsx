import { Link } from "react-router";
import ScoreCircle from "./ScoreCricle";

const ResumeCard = ({ resume }: { resume: Resume }) => {
  return (
    <Link
      to={`/resume/${resume.id}`}
      className="resume-card animate-in fade-in duration-1000 h-full w-full"
    >
      <div className="resume-card-header flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-black font-bold wrap-break-word">
            {resume.companyName}
          </h2>
          <h3 className="text-lg wrap-break-word text-gray-500">
            {resume.jobTitle}
          </h3>
        </div>

        <ScoreCircle score={resume.feedback.overallScore} />
      </div>

      <div className="gradient-background animate-in fade-in duration-1000">
        <img
          src={resume.imagePath}
          alt="resume"
          className="w-full h-64 object-cover object-top"
        />
      </div>
    </Link>
  );
};

export default ResumeCard;
