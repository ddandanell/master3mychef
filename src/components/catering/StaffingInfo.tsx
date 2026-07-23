import { Users, ChefHat, UserPlus } from 'lucide-react'

function calcStaff(guests: number) {
  if (guests >= 450) return { chefs: 'Custom brigade', assistants: 'Custom team' }
  const chefs = Math.ceil(guests / 50)
  const assistants = Math.ceil(guests / 12)
  return { chefs, assistants }
}

export default function StaffingInfo() {
  const examples = [
    { guests: 15 },
    { guests: 30 },
    { guests: 80 },
    { guests: 150 },
  ]

  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#C5A028] text-sm tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Team
          </p>
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            How We Staff Your Event
          </h2>
          <p className="text-[#4A4745]">
            Staffing is included in your catering package. These numbers are a rough guide so you know who will be on site.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6">
            <ChefHat className="w-8 h-8 text-[#C5A028] mb-4" />
            <h3 className="font-medium text-lg mb-2">Chefs</h3>
            <p className="text-sm text-[#4A4745]">
              <strong>1 chef per 50 guests.</strong> One head chef handles events up to 50 guests; larger events add chefs so every dish is finished on time.
            </p>
          </div>
          <div className="bg-[#FAFAF8] rounded-2xl border border-[#E8E6E3] p-6">
            <UserPlus className="w-8 h-8 text-[#C5A028] mb-4" />
            <h3 className="font-medium text-lg mb-2">Assistants</h3>
            <p className="text-sm text-[#4A4745]">
              <strong>1 assistant per 12 guests.</strong> Assistants help with setup, carving, serving, and cleanup so service runs smoothly.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-center font-medium mb-6">Quick staffing examples</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {examples.map(({ guests }) => {
              const staff = calcStaff(guests)
              return (
                <div key={guests} className="bg-[#FAFAF8] rounded-xl border border-[#E8E6E3] p-4 text-center">
                  <Users className="w-5 h-5 text-[#C5A028] mx-auto mb-2" />
                  <p className="font-medium text-sm">{guests} guests</p>
                  <p className="text-xs text-[#4A4745] mt-1">
                    {typeof staff.chefs === 'number' ? `${staff.chefs} chef${staff.chefs > 1 ? 's' : ''}` : staff.chefs}
                    <br />
                    {typeof staff.assistants === 'number' ? `${staff.assistants} assistant${staff.assistants > 1 ? 's' : ''}` : staff.assistants}
                  </p>
                </div>
              )
            })}
          </div>
          <p className="text-center text-xs text-[#4A4745] mt-6">
            For events over 450 guests we build a custom brigade sized to the event.
          </p>
        </div>
      </div>
    </section>
  )
}
