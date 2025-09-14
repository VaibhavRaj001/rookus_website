import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Buttons";

export default function Pricing() {
  const plans = [
    {
      name: "Pricing",
      price: "$29/mo",
      features: [
        "Keyword optimization",
        "Automated meta tags",
        "SEO monitoring",
        "Monthly reports",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$79/mo",
      features: [
        "Keyword optimization",
        "Automated meta tags",
        "SEO monitoring",
        "Monthly reports",
        "Content suggestions",
        "Link optimization",
      ],
      highlight: true,
    },
    {
      name: "Business",
      price: "$149/mo",
      features: [
        "Keyword optimization",
        "Automated meta tags",
        "SEO monitoring",
        "Monthly reports",
        "Content suggestions",
        "Link optimization",
        "Multi-user access",
        "API integration",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-black text-white py-20">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#150015] to-black"></div>
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[80vw] max-w-[500px] h-[80vw] max-h-[500px] bg-purple-600/30 rounded-full blur-[180px]"></div>

      {/* Header */}
      <div className="relative z-10 text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing</h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
          Choose the right plan to meet your SEO needs and start optimizing today.
        </p>
        <div className="mt-4">
          <span className="px-4 py-1 rounded-full bg-purple-600/20 text-pink-400 text-sm font-medium">
            Supercharge
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
        {plans.map((plan, idx) => (
          <Card
            key={idx}
            className={`rounded-2xl border flex flex-col ${
              plan.highlight
                ? "bg-gradient-to-b from-[#1a001a] to-[#0f0010] border-purple-500 shadow-lg shadow-purple-500/50"
                : "bg-[#0f0f0f] border-white/10"
            }`}
          >
            <CardContent className="p-6 sm:p-8 flex flex-col h-full">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-xl sm:text-2xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-2 text-gray-300 text-sm mb-6 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-purple-400">✓</span> {feature}
                  </li>
                ))}
              </ul>
              {/* Button example */}
              {/* <Button
                className={`w-full py-3 rounded-xl font-medium ${
                  plan.highlight
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "bg-gray-800 hover:bg-gray-700 text-white"
                }`}
              >
                Join waitlist
              </Button> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
