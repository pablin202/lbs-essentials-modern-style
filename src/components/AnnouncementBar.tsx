import { Truck } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="bg-primary text-primary-foreground text-center py-2 text-xs tracking-wide">
      <div className="flex items-center justify-center gap-2">
        <Truck size={13} />
        <span>Free tracked shipping on orders over $75 AUD · Processing: 1–3 business days</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
