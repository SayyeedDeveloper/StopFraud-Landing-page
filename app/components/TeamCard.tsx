import Link from "next/link";
import Image from "next/image";

const TeamCard = ({ name, role, skills, description, initials, color, photo, linkedin, github, portfolio }: TeamMemberProps) => {
    return (
        <div className="group h-full rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:shadow-xl hover:scale-[1.02]">
            <div className="flex h-full flex-col items-center text-center">
                {photo ? (
                    <div className="mb-4 h-24 w-24 rounded-full overflow-hidden">
                        <Image
                            src={photo}
                            alt={name}
                            width={96}
                            height={96}
                            className="h-full w-full object-cover"
                        />
                    </div>
                ) : (
                    <div
                        className={`mb-4 flex h-24 w-24 items-center justify-center rounded-full ${color} text-2xl font-bold text-white`}
                    >
                        {initials}
                    </div>
                )}
                <div className="min-h-[60px] flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                    <p className="mt-1 text-sm font-medium text-blue-600">{role}</p>
                </div>

                <div className={"mt-4 w-full flex-1"}>
                    <h4 className="text-base font-semibold uppercase tracking-wide text-gray-700">Description</h4>
                    <p className={"text-xs font-semibold  tracking-wide text-gray-500"}>
                        {description}
                    </p>
                </div>

                <div className="mt-4 w-full flex-1">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Skills</h4>
                    <div className="mt-2 flex flex-wrap gap-2 justify-center">
                        {skills.map((skill, idx) => (
                            <span key={idx} className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-auto pt-4 flex gap-3">
                    {linkedin && (
                        <Link href={`${linkedin}`} target={"_blank"} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                            LinkedIn
                        </Link>
                    )}
                    {github && (
                        <Link href={`${github}`} target={"_blank"} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                            GitHub
                        </Link>
                    )}
                    {portfolio && (
                        <Link href={`${portfolio}`} target={"_blank"} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                            Portfolio
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
export default TeamCard