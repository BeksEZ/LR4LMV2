export function ContactInfo() {
  return (
    <section className="flex flex-col grow items-start px-8 pt-16 pb-24 w-full text-2xl font-extrabold text-white bg-blue-600 rounded-[60px] max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
      <div className="space-y-2">
        <h2>Години роботи</h2>
        <p className="text-3xl">8:00 - 22:00</p>
      </div>

      <div className="mt-12 max-md:mt-10 space-y-2">
        <h2>e-mail</h2>
        <a
          href="mailto:cafevedy@gmail.com"
          className="text-3xl hover:underline"
          aria-label="Email us at cafevedy@gmail.com"
        >
          cafevedy@gmail.com
        </a>
      </div>

      <div className="mt-12 max-md:mt-10 space-y-2">
        <h2>Адреса</h2>
        <address className="self-stretch text-3xl not-italic max-md:max-w-full">
          м. Одеса, проспект шевченка, 1
        </address>
      </div>
    </section>
  );
}

export default ContactInfo;
