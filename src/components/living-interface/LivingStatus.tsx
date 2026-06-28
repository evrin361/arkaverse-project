import { getExecutiveMission } from "@/runtime";
import { getExecutiveIdentity } from "@/runtime";
import { useRuntimeContext } from "@/runtime/useRuntimeContext";
import { updateRuntimeContext } from "@/runtime/runtimeStore";

export default function LivingStatus() {

    const mission = getExecutiveMission();

const identity = getExecutiveIdentity();

const runtime = useRuntimeContext();
  return (
    <div className="space-y-2 text-sm text-zinc-300">
      <p>Executive Runtime</p>

      <p>Status : Active</p>

      <p>Mission : {mission}</p>

<p>Name : {identity.name}</p>

<p>Version : {identity.version}</p>

<p>Mode : {identity.mode}</p>

<p>Active Users : {runtime.activeUsers}</p>

<p>AI Busy : {runtime.aiBusy ? "YES" : "NO"}</p>

<p>Memory Loaded : {runtime.memoryLoaded ? "YES" : "NO"}</p>

<p>System Healthy : {runtime.systemHealthy ? "YES" : "NO"}</p>


<button
  className="mt-4 rounded bg-emerald-600 px-3 py-2 text-white hover:bg-emerald-700"
  onClick={() =>
    updateRuntimeContext({
      aiBusy: !runtime.aiBusy,
    })
  }
>
  Toggle AI Busy
</button>

    </div>
  );
}