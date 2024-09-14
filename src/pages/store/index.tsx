import SearchForm from "@/components/elements/form/SerachForm";
import CustomHeading from "@/components/elements/text/CustomHeading";
import Layout from "@/components/layouts/Layout";
import StoreCard from "@/features/store/StoreCard";

const storeList = [
  {
    storeInfo: {
      storeName: "Downtown Cafe",
      address: "123 Main St, City Center",
      phoneNumber: "123-456-7890",
      businessHours: {
        open: "10:00",
        close: "23:00",
      },
    },
  },
  {
    storeInfo: {
      storeName: "Riverside Espresso",
      address: "456 River Rd, Waterfront",
      phoneNumber: "123-456-7890",
      businessHours: {
        open: "10:00",
        close: "23:00",
      },
    },
  },
  {
    storeInfo: {
      storeName: "Hilltop Coffee House",
      address: "123 Main St, City Center",
      phoneNumber: "123-456-7890",
      businessHours: {
        open: "10:00",
        close: "23:00",
      },
    },
  },
];
export default function Store() {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <CustomHeading tag="h1">Find Store</CustomHeading>
        <SearchForm />
      </div>
      <div>
        <div className="mb-4">
          <CustomHeading tag="h2">
            Nearby Stores
          </CustomHeading>
        </div>
        <div className="grid space-y-4">
          {storeList.map((store) => (
            <div key={store.storeInfo.storeName}>
              <StoreCard storeInfo={store.storeInfo} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

Store.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
