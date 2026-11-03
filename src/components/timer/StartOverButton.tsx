import { useState } from "react";
import { ListRestart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConfirmDialog } from "@/components/ui/dialog";
import { useTimerActions } from "@/hooks/useTimerActions";

/** Restarts the whole pomodoro flow (focus phase, cycle back to zero), after a confirmation. */
export function StartOverButton({ className }: { className?: string }) {
  const { startOver } = useTimerActions();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="ghost" size="sm" onClick={() => setOpen(true)} className={className} title="Reset the whole cycle back to the first focus session">
        <ListRestart /> Start over
      </Button>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        title="Start over?"
        description="This returns to the first focus session and clears your progress towards the next long break. The running session ends without being recorded; your history is kept."
        confirmLabel="Start over"
        destructive
        onConfirm={() => {
          void startOver();
          setOpen(false);
        }}
      />
    </>
  );
}
