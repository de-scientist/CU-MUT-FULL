import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AdminLayout } from "../../layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { apiFetch } from "../../lib/api";

type MinistryApplication = {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  ministry: string;
  message?: string;
  experience?: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
};

export const AdminMinistryApplicationsPage: React.FC = () => {
  const queryClient = useQueryClient();

  const { data: apps } = useQuery<MinistryApplication[]>({
    queryKey: ["admin-ministry-applications"],
    queryFn: () =>
      apiFetch<MinistryApplication[]>(
        "/ministry-applications",
        {},
        true // auth required
      ),
  });

  const updateStatusMutation = useMutation({
    mutationFn: (params: { id: string; status: MinistryApplication["status"] }) =>
      apiFetch<MinistryApplication>(
        `/ministry-applications/${params.id}/status`,
        {
          method: "PATCH",
          body: JSON.stringify({ status: params.status }),
        },
        true
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-ministry-applications"],
      });
    },
  });

  const pendingCount = apps?.filter((a) => a.status === "pending").length ?? 0;
  const approvedCount = apps?.filter((a) => a.status === "approved").length ?? 0;
  const rejectedCount = apps?.filter((a) => a.status === "rejected").length ?? 0;

  const setStatus = (id: string, status: MinistryApplication["status"]) => {
    updateStatusMutation.mutate({ id, status });
  };

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-heading text-mutcu-navy mb-1">
          Ministry Applications
        </h1>
        <p className="text-xs text-slate-600">
          Review and manage applications from members who want to join
          ministries.
        </p>
      </div>

      {/* Summary */}
      <div className="mb-6 grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <p className="text-xs text-slate-500">Pending</p>
          <p className="text-xl font-semibold text-mutcu-navy">{pendingCount}</p>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <p className="text-xs text-slate-500">Approved</p>
          <p className="text-xl font-semibold text-green-600">
            {approvedCount}
          </p>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <p className="text-xs text-slate-500">Rejected</p>
          <p className="text-xl font-semibold text-mutcu-red">
            {rejectedCount}
          </p>
        </div>
      </div>

      {/* List */}
      <div className="space-y-3">
        {apps?.map((app) => (
          <div
            key={app._id}
            className="rounded-2xl bg-white p-4 shadow-sm flex flex-col gap-3 md:flex-row md:items-start"
          >
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h2 className="text-sm font-semibold text-mutcu-navy">
                  {app.name}
                </h2>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase text-mutcu-navy">
                  {app.ministry}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase ${
                    app.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : app.status === "approved"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {app.status}
                </span>
              </div>
              <p className="text-xs text-slate-600">
                <i className="fas fa-envelope mr-1 text-mutcu-orange" />
                {app.email}
                {app.phone && (
                  <>
                    {" "}
                    ·{" "}
                    <i className="fas fa-phone mr-1 text-mutcu-orange" />
                    {app.phone}
                  </>
                )}
              </p>
              <p className="mt-1 text-[10px] text-slate-500">
                Submitted: {new Date(app.createdAt).toLocaleString()}
              </p>
              {app.message && (
                <p className="mt-2 text-xs text-slate-700">
                  <span className="font-semibold text-mutcu-navy">
                    Interest:
                  </span>{" "}
                  {app.message}
                </p>
              )}
              {app.experience && (
                <p className="mt-1 text-xs text-slate-700">
                  <span className="font-semibold text-mutcu-navy">
                    Experience:
                  </span>{" "}
                  {app.experience}
                </p>
              )}
            </div>
            <div className="flex gap-2 md:flex-col">
              <Button
                size="sm"
                variant="outline"
                className="border-yellow-500 text-yellow-700 hover:bg-yellow-500 hover:text-white"
                onClick={() => setStatus(app._id, "pending")}
              >
                Pending
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-green-600 text-green-700 hover:bg-green-600 hover:text-white"
                onClick={() => setStatus(app._id, "approved")}
              >
                Approve
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-mutcu-red text-mutcu-red hover:bg-mutcu-red hover:text-white"
                onClick={() => setStatus(app._id, "rejected")}
              >
                Reject
              </Button>
            </div>
          </div>
        ))}
        {apps && apps.length === 0 && (
          <p className="text-xs text-slate-600">
            No ministry applications yet.
          </p>
        )}
      </div>
    </AdminLayout>
  );
};