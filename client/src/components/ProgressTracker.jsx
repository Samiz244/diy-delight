import "./ProgressTracker.css";

export default function ProgressTracker({
  currentStepIndex,
  highestUnlockedStepIndex,
  totalSteps,
}) {
  return (
    <div className="progress-tracker">
      <span className="progress-pizza">🍕</span>

      {Array.from({ length: totalSteps }, (_, i) => {
        const isFilled = i < highestUnlockedStepIndex;
        const isCurrent = i === currentStepIndex;

        return (
          <span
            key={i}
            className={[
              "progress-dot",
              isFilled ? "progress-dot--filled" : "progress-dot--empty",
              isCurrent ? "progress-dot--current" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          />
        );
      })}
    </div>
  );
}
