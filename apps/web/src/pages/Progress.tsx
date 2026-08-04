import { useEffect, useState } from "react";
import ProgressForm from "@/components/dashboard/ProgressForm";
import {
  getProgress,
  deleteProgress,
} from "@/services/progressService";
import type { Progress } from "@/services/progressService";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export default function ProgressPage() {
  const [progress, setProgress] = useState<Progress[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadProgress() {
    try {
      const data = await getProgress();
      setProgress(data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load progress.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProgress();
  }, []);

  async function handleDelete(id: string) {
    const result = await Swal.fire({
      title: "Delete Progress?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#06b6d4",
      cancelButtonColor: "#ef4444",
      background: "#0f172a",
      color: "#fff",
    });

    if (!result.isConfirmed) return;

    try {
      await deleteProgress(id);

      toast.success("Progress deleted successfully!");

      loadProgress();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete progress.");
    }
  }

  if (loading) {
    return (
      <div className="flex h-60 items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-8 text-4xl font-black">
        Progress Tracking
      </h1>

      <ProgressForm onProgressCreated={loadProgress} />

      {progress.length === 0 ? (
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center">
          No progress records yet.
        </div>
      ) : (
        <div className="space-y-5">
          {progress.map((item) => (
            <div
              key={item._id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">
                    {new Date(item.date).toLocaleDateString()}
                  </h2>

                  <p className="text-slate-400">
                    Weight: {item.bodyWeight} kg
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(item._id)}
                  className="rounded-lg p-2 transition hover:bg-red-500/10"
                >
                  <Trash2 className="text-red-400" />
                </button>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                <Info label="Body Fat" value={`${item.bodyFat ?? 0}%`} />
                <Info label="Chest" value={`${item.chest ?? 0} cm`} />
                <Info label="Waist" value={`${item.waist ?? 0} cm`} />
                <Info label="Hips" value={`${item.hips ?? 0} cm`} />
                <Info label="Biceps" value={`${item.biceps ?? 0} cm`} />
                <Info label="Thighs" value={`${item.thighs ?? 0} cm`} />
              </div>

              {item.notes && (
                <div className="mt-6 rounded-xl bg-slate-950 p-4">
                  <p className="text-slate-300">
                    {item.notes}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg bg-slate-950 p-4 text-center">
      <p className="text-sm text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-lg font-bold">
        {value}
      </p>
    </div>
  );
}