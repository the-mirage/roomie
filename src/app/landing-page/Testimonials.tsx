import Image from "next/image";

const testimonies = [
  {
    date: "2023-10-01",
    stars: 5,
    text: "The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
    name: "John Doe",
    avatar: "",
  },
  {
    date: "2024-11-30",
    stars: 5,
    text: "The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
    name: "Jane Smith",
    avatar: "",
  },
  {
    date: "2025-03-02",
    stars: 5,
    text: "The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
    name: "Daniel Cho",
    avatar: "",
  },
];

const Testimonials = () => {
  return (
    <section className="p-10">
      <div className="lg:px-20 md:px-16 px-10 py-10 bg-color-light">
        <h1 className="font-primary lg:text-5xl md:text-4xl text-3xl font-semibold mb-10 text-center">
          What our clients say
        </h1>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-6">
          {testimonies.map((testimony, index) => (
            <div
              key={index}
              className="bg-color-secondary py-4 px-6 rounded-xl shadow-sm"
            >
              <div className="flex justify-between items-center">
                <p className="font-body text-[13px]">{testimony.date}</p>
                <span className="text-yellow-500">
                  {"★".repeat(testimony.stars)}
                </span>
              </div>
              <p className="font-primary lg:text-[14px] text-[12px] text-start">
                <span className="color-primary text-5xl font-primary mr-2 align-middle">
                  “
                </span>
                {testimony.text}
                <span className="color-primary text-5xl font-primary ml-2 align-middle">
                  ”
                </span>
              </p>
              {/* <Image src={} alt="" /> */}
              <p className="font-body text-[13px]">Name</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
