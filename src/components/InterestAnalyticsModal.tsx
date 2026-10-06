import React from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';
import { X, BarChart2, Download, Users, Heart, DollarSign } from 'lucide-react';

export const InterestAnalyticsModal: React.FC = () => {
  const {
    isAnalyticsOpen,
    setIsAnalyticsOpen,
    preOrderInterests,
    analyticsEvents,
  } = useApp();

  if (!isAnalyticsOpen) return null;

  // Calculate top wishlisted flavours & total estimated value
  const totalLeads = preOrderInterests.length;
  const totalEvents = analyticsEvents.length;

  const downloadCsv = () => {
    const headers = ['ID', 'First Name', 'Email', 'Interest Type', 'Marketing Consent', 'Created At'];
    const rows = preOrderInterests.map((item) => [
      item.id,
      item.firstName,
      item.email,
      item.interestType,
      item.marketingConsent ? 'YES' : 'NO',
      item.createdAt,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `samazing_preorder_interests_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#F6F4EE] rounded-3xl border border-[#E5E0D4] max-w-4xl w-full p-6 sm:p-10 shadow-2xl relative text-left my-8 max-h-[90vh] overflow-y-auto space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E5E0D4]">
          <div className="flex items-center gap-2 font-serif font-bold text-2xl text-[#1E2421]">
            <BarChart2 className="w-6 h-6 text-[#9E4A3B]" />
            <span>Merchant Interest Analytics & Leads</span>
          </div>
          <button
            onClick={() => setIsAnalyticsOpen(false)}
            className="p-2 text-[#1E2421] bg-[#EAE5D9] hover:bg-[#DED7C7] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-[#EAE5D9]/50 p-5 rounded-2xl border border-[#E5E0D4] flex items-center gap-4">
            <div className="p-3 bg-[#2D3A34] text-[#D4A359] rounded-xl">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-serif font-bold text-[#1E2421]">{totalLeads}</p>
              <p className="text-xs text-[#5E6862]">Registered Pre-Order Leads</p>
            </div>
          </div>

          <div className="bg-[#EAE5D9]/50 p-5 rounded-2xl border border-[#E5E0D4] flex items-center gap-4">
            <div className="p-3 bg-[#9E4A3B] text-white rounded-xl">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-serif font-bold text-[#1E2421]">
                {preOrderInterests.filter((i) => i.marketingConsent).length}
              </p>
              <p className="text-xs text-[#5E6862]">Double Opt-in Consents</p>
            </div>
          </div>

          <div className="bg-[#EAE5D9]/50 p-5 rounded-2xl border border-[#E5E0D4] flex items-center gap-4">
            <div className="p-3 bg-[#D4A359] text-[#1E2421] rounded-xl">
              <BarChart2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-serif font-bold text-[#1E2421]">{totalEvents}</p>
              <p className="text-xs text-[#5E6862]">Tracked User Engagement Events</p>
            </div>
          </div>
        </div>

        {/* Lead Table */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-xl text-[#1E2421]">
              Customer Interest Registrations
            </h3>
            <button
              onClick={downloadCsv}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2D3A34] text-[#F6F4EE] text-xs font-semibold rounded-full hover:bg-[#1E2421] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-[#E5E0D4] p-4 text-xs">
            <table className="w-full text-left font-mono">
              <thead>
                <tr className="border-b border-[#E5E0D4] text-[#9E4A3B] font-sans font-semibold">
                  <th className="py-2">Name</th>
                  <th className="py-2">Email</th>
                  <th className="py-2">Interest Type</th>
                  <th className="py-2">Consent</th>
                  <th className="py-2">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E0D4]/60 text-[#1E2421]">
                {preOrderInterests.map((lead) => (
                  <tr key={lead.id}>
                    <td className="py-2.5 font-sans font-medium">{lead.firstName}</td>
                    <td className="py-2.5">{lead.email}</td>
                    <td className="py-2.5 font-sans">
                      <span className="px-2 py-0.5 bg-[#EAE5D9] rounded-md uppercase text-[10px] font-bold">
                        {lead.interestType}
                      </span>
                    </td>
                    <td className="py-2.5 font-bold">
                      {lead.marketingConsent ? (
                        <span className="text-emerald-600">✓ YES</span>
                      ) : (
                        <span className="text-[#828C86]">NO</span>
                      )}
                    </td>
                    <td className="py-2.5 text-[#828C86]">{new Date(lead.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};
