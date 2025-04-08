import { Team } from "./Team";

const Info = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="text-center py-20 max-w-4xl mx-auto space-y-4 px-4">
        <p className="text-3xl font-normal">O U R T E A M</p>
        <div className="text-lg">
          Our team isn’t just experienced—we’re seasoned pros with over 20 years
          of combined storytelling. We capture love with authenticity, artistry,
          and just the right amount of good vibes. With a dream team of
          photographers and videographers, we’ve got the expertise and manpower
          to cover up to three events per day—because love doesn’t wait, and
          neither do we! Whether it’s an intimate elopement or a grand wedding,
          we bring passion, creativity, and maybe a few happy tears behind the
          camera.
        </div>
      </div>

      {/* Our Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-6 px-4 md:px-10 py-10">
        {Team.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <img
              src={member.image}
              alt="team_image"
              className="w-full max-w-xs  object-cover"
            />
            <p className="mt-4 text-xl font-medium">{member.name}</p>
            <p className="text-gray-500">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
