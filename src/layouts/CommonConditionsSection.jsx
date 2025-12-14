import ConditionCard from "./ConditionCard";
const CommonConditionsSection = () => (
  <section className="py-20 bg-gainsboro-1 mx-8 rounded-3xl mt-10 " id="help">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl  text-charcoal-3 mb-4 font-public ">
          Common Assessments Explained
        </h2>
        <p className="text-xl font-semibold text-dim-gray-4 ">
          We cover the most frequent types of tests related to these body areas.
        </p>
      </div>
 
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 tracking-1 leading-1">
        <ConditionCard
          icon="🦵"
          title="Lower Body Assessments"
          description="Tests for gait analysis, squat mechanics, and ligament stability (ACL, PCL, etc.)."
        />
        <ConditionCard
          icon="🧍"
          title="Spine & Posture Screening"
          description="How therapists check flexibility, mobility, and nerve function for neck and back pain."
        />
        <ConditionCard
          icon="👐"
          title="Upper Limb Tests"
          description="Understanding rotator cuff tests, grip strength measurement, and shoulder impingement checks."
        />
        <ConditionCard
          icon="🧠"
          title="Neurological Screening"
          description="Simple reflex checks, sensation tests, and motor control evaluations."
        />
      </div>
    </div>
  </section>
);

export default CommonConditionsSection;