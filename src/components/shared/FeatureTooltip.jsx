import React, { useRef, useState } from "react"
import { Check } from "lucide-react"
import { cn } from "@/src/lib/utils"

export function FeatureTooltip({ children, title, description, benefits, align = "left", className }) {
  const [position, setPosition] = useState("top")
  const triggerRef = useRef(null)

  const handleMouseEnter = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      // If there is less than 280px of space above the element, show tooltip below it
      if (rect.top < 280) {
        setPosition("bottom")
      } else {
        setPosition("top")
      }
    }
  }

  return (
    <div 
      className={cn("relative group w-full h-full", className)}
      ref={triggerRef}
      onMouseEnter={handleMouseEnter}
    >
      {children}
      
      {/* Tooltip Panel */}
      <div 
        className={cn(
          "absolute z-50 min-w-[280px] max-w-[340px] bg-white rounded-xl shadow-2xl border border-[#006B6B]/20 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",
          align === "right" ? "right-0" : "left-0",
          position === "top" ? "bottom-full mb-2" : "top-full mt-2"
        )}
      >
        {/* Header */}
        <div className="text-xs uppercase tracking-wider text-[#006B6B] font-bold mb-2 flex items-center gap-1">
          <span className="text-[10px]">✦</span> Full Platform Feature
        </div>
        
        {/* Content */}
        <h4 className="text-sm font-bold text-gray-900 mb-1">{title}</h4>
        <p className="text-xs text-gray-600 mb-3 leading-relaxed">{description}</p>
        
        {/* Benefits List */}
        {benefits && benefits.length > 0 && (
          <ul className="space-y-1.5">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex flex-row items-start gap-1.5 text-xs text-gray-700">
                <Check className="h-3.5 w-3.5 text-[#006B6B] shrink-0 mt-0.5" />
                <span className="leading-snug">{benefit}</span>
              </li>
            ))}
          </ul>
        )}
        
        {/* Arrow pointer */}
        <div 
          className={cn(
            "absolute w-4 h-4 bg-white border-[#006B6B]/20 rotate-45 z-[-1]",
            align === "right" ? "right-6" : "left-6",
            position === "top" ? "-bottom-2 border-r border-b" : "-top-2 border-l border-t"
          )}
        />
      </div>
    </div>
  )
}

