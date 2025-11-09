import { Button } from "@/components/ui/Buttons";

const plans = [
  {
    id: "launch",
    name: "Launch",
    price: "$29",
    cadence: "per month",
    blurb: "Solo strategists validating campaign foundations.",
    cta: "Start trial",
    highlight: false,
  },
  {
    id: "scale",
    name: "Scale",
    price: "$79",
    cadence: "per month",
    blurb: "Growth teams syncing creative and performance insights.",
    cta: "Talk to sales",
    highlight: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$149",
    cadence: "per month",
    blurb: "Global orgs aligning multi-channel GTM across regions.",
    cta: "Request quote",
    highlight: false,
  },
];

const features = [
  {
    name: "Keyword optimization",
    description: "AI-prioritized targets based on live search intent.",
    availability: {
      launch: true,
      scale: true,
      enterprise: true,
    },
  },
  {
    name: "Automated meta tags",
    description: "Adaptive titles and descriptions pushed to CMS.",
    availability: {
      launch: true,
      scale: true,
      enterprise: true,
    },
  },
  {
    name: "SEO monitoring",
    description: "Rank and crawl health alerts across properties.",
    availability: {
      launch: true,
      scale: true,
      enterprise: true,
    },
  },
  {
    name: "Monthly reports",
    description: "Executive-ready snapshots emailed automatically.",
    availability: {
      launch: true,
      scale: true,
      enterprise: true,
    },
  },
  {
    name: "Content suggestions",
    description: "Topic gaps and outlines delivered to your editors.",
    availability: {
      launch: false,
      scale: true,
      enterprise: true,
    },
  },
  {
    name: "Link optimization",
    description: "Internal link flows recalibrated as priorities shift.",
    availability: {
      launch: false,
      scale: true,
      enterprise: true,
    },
  },
  {
    name: "Multi-user access",
    description: "Add regions and partners with granular permissions.",
    availability: {
      launch: false,
      scale: false,
      enterprise: true,
    },
  },
  {
    name: "API integration",
    description: "Sync performance metrics into your data warehouse.",
    availability: {
      launch: false,
      scale: false,
      enterprise: true,
    },
  },
];

export default function Pricing() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#150015] to-black" />
      <div className="absolute bottom-[-100px] left-1/2 h-[80vw] max-h-[500px] w-[80vw] max-w-[500px] -translate-x-1/2 rounded-full bg-purple-600/30 blur-[180px]" />

      <div className="relative z-10 mb-16 px-4 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Pricing</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-300 md:text-base">
          Compare plans at a glance and pick the stack that keeps your GTM teams in sync.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-purple-600/20 px-4 py-1 text-xs font-medium uppercase tracking-[0.35em] text-pink-400">
          Align Faster
        </div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 md:px-8">
        <div className="overflow-x-auto">
          <div className="min-w-[720px] rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur">
            <div
              className="grid border-b border-white/10"
              style={{ gridTemplateColumns: "220px repeat(3, minmax(180px, 1fr))" }}
            >
              <div className="px-6 py-6 text-left">
                <p className="text-sm font-medium text-white/80">Feature</p>
                <p className="mt-1 text-xs text-gray-400">
                  Toggle-ready comparison uses real availability so teams can align on the package they need.
                </p>
              </div>
              {plans.map((plan, index) => (
                <div
                  key={plan.id}
                  className={`px-6 py-6 ${index > 0 ? "border-l border-white/10" : ""} ${
                    plan.highlight ? "bg-white/[0.06]" : ""
                  }`}
                >
                  <div className="flex flex-col gap-3 text-center">
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                      {plan.name}
                    </div>
                    <div>
                      <span className="text-3xl font-semibold text-white">{plan.price}</span>
                      <span className="ml-1 text-sm text-gray-400">{plan.cadence}</span>
                    </div>
                    <p className="text-xs text-gray-400">{plan.blurb}</p>
                    <Button
                      variant={plan.highlight ? "highlight" : "default"}
                      className="w-full justify-center py-2 text-sm"
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {features.map((feature, featureIndex) => (
              <div
                key={feature.name}
                className="grid"
                style={{ gridTemplateColumns: "220px repeat(3, minmax(180px, 1fr))" }}
              >
                <div
                  className={`px-6 py-4 ${
                    featureIndex !== features.length - 1 ? "border-b border-white/5" : ""
                  }`}
                >
                  <p className="text-sm font-medium text-white">{feature.name}</p>
                  <p className="mt-1 text-xs text-gray-400">{feature.description}</p>
                </div>
                {plans.map((plan, planIndex) => {
                  const included = feature.availability[plan.id];
                  return (
                    <div
                      key={plan.id}
                      className={`flex items-center justify-center px-6 py-4 ${
                        planIndex > 0 ? "border-l border-white/5" : ""
                      } ${
                        featureIndex !== features.length - 1 ? "border-b border-white/5" : ""
                      } ${plan.highlight ? "bg-white/[0.02]" : ""}`}
                    >
                      <input
                        type="checkbox"
                        checked={included}
                        readOnly
                        disabled
                        className={`h-4 w-4 rounded border-white/30 bg-transparent accent-purple-500 ${
                          included ? "opacity-100" : "opacity-40"
                        }`}
                        aria-label={`${plan.name} includes ${feature.name}`}
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-gray-500">
          Need a custom rollout? Bundle multi-brand access, SSO, and dedicated enablement with an enterprise agreement.
        </p>
      </div>
    </section>
  );
}
