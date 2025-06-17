import { useRecoilState } from "recoil";
import { alertQueueState } from "./alertAtom";
import { Alert } from "./Alert";

export function GlobalAlert() {
  const [queue, setQueue] = useRecoilState(alertQueueState);
  const current = queue[queue.length - 1];

  const closeCurrent = () => {
    setQueue((prev) => prev.slice(0, prev.length - 1));
  };

  if (!current) return null;

  return (
    <Alert
      open
      description={current.description}
      acceptLabel={current.acceptLabel}
      cancelLabel={current.cancelLabel}
      onClose={closeCurrent}
      onAccept={() => {
        current.onAccept?.();
        closeCurrent();
      }}
      onCancel={() => {
        current.onCancel?.();
        closeCurrent();
      }}
      showCancelButton={current.showCancelButton}
      title={current.title}
    />
  );
}
