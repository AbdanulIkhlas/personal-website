import { forwardRef } from "react";
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react";
import { resumeData } from "@/data/resume.data";

export const ResumePreview = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="bg-white text-gray-900 p-8 md:p-12 max-w-[800px] mx-auto font-sans text-sm leading-relaxed"
      style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
    >
      {/* Header */}
      <header className="text-center border-b border-gray-200 pb-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">
          {resumeData.personal.name}
        </h1>
        <p className="text-lg text-emerald-700 font-medium mb-4">
          {resumeData.personal.role}
        </p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-gray-600">
          <span className="inline-flex items-center gap-1">
            <Mail className="h-3 w-3" />
            {resumeData.personal.email}
          </span>
          <span className="inline-flex items-center gap-1">
            <Phone className="h-3 w-3" />
            {resumeData.personal.phone}
          </span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {resumeData.personal.location}
          </span>
          <span className="inline-flex items-center gap-1">
            <Globe className="h-3 w-3" />
            {resumeData.personal.website}
          </span>
          <span className="inline-flex items-center gap-1">
            <Linkedin className="h-3 w-3" />
            {resumeData.personal.linkedin}
          </span>
          <span className="inline-flex items-center gap-1">
            <Github className="h-3 w-3" />
            {resumeData.personal.github}
          </span>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
          Summary
        </h2>
        <p className="text-gray-700">{resumeData.summary}</p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">
          Experience
        </h2>
        <div className="space-y-4">
          {resumeData.experience.map((exp, i) => (
            <div key={i}>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-gray-900">{exp.title}</h3>
                <span className="text-xs text-gray-500">{exp.period}</span>
              </div>
              <p className="text-gray-600 text-xs mb-2">
                {exp.company} • {exp.location}
              </p>
              <ul className="list-disc list-outside ml-4 space-y-1 text-gray-700">
                {exp.highlights.map((highlight, j) => (
                  <li key={j}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-2 text-gray-700">
          <div>
            <span className="font-medium text-gray-900">Languages:</span>{" "}
            {resumeData.skills.languages.join(", ")}
          </div>
          <div>
            <span className="font-medium text-gray-900">Frameworks:</span>{" "}
            {resumeData.skills.frameworks.join(", ")}
          </div>
          <div>
            <span className="font-medium text-gray-900">Tools:</span>{" "}
            {resumeData.skills.tools.join(", ")}
          </div>
          <div>
            <span className="font-medium text-gray-900">Concepts:</span>{" "}
            {resumeData.skills.concepts.join(", ")}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
          Education
        </h2>
        {resumeData.education.map((edu, i) => (
          <div key={i} className="mb-3 last:mb-0">
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-gray-900 font-bold">{edu.degree}</span>
              <span className="text-xs text-gray-500 font-medium">
                {edu.year}
              </span>
            </div>
            <div className="text-xs text-gray-600 mb-1">{edu.school}</div>
            {edu.details && (
              <div className="text-xs text-emerald-700 font-medium">
                {edu.details}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
          Certifications
        </h2>
        <p className="text-gray-700">{resumeData.certifications.join(" • ")}</p>
      </section>
    </div>
  );
});

ResumePreview.displayName = "ResumePreview";
