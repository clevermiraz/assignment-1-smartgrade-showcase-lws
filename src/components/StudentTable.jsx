import { classOneStudent, classTwoStudent } from "../data/studentData";
import SearchBox from "./SearchBox";

export default function StudentTable() {
    return (
        <>
            <section className="py-24 lg:pt-[120px] lg:pb-28">
                <div className="container">
                    <div className="mb-16 flex flex-col items-center">
                        <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
                            <span className="text-[#00CC8C]">Students</span> of
                            the Year
                        </h2>
                        {/* <!-- Search Box --> */}
                        <SearchBox />
                    </div>

                    <div className="max-w-[848px] mx-auto overflow-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-[#FFFFFF0D]">
                                    <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                                        ID
                                    </th>
                                    <th className="p-5 text-sm md:text-xl font-semibold text-left">
                                        Name
                                    </th>
                                    <th className="p-5 text-sm md:text-xl font-semibold">
                                        Scores
                                    </th>
                                    <th className="p-5 text-sm md:text-xl font-semibold">
                                        Percentage
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- class one --> */}
                                <tr className="bg-white/5">
                                    <td
                                        className="p-5 text-sm md:text-xl"
                                        colSpan="4"
                                    >
                                        Class One
                                    </td>
                                </tr>
                                {classOneStudent.map((student) => (
                                    <tr
                                        className="border-b border-[#7ECEB529]"
                                        key={student?.id}
                                    >
                                        <td className="p-5 text-sm md:text-xl">
                                            {student?.id}
                                        </td>
                                        <td className="p-5 text-sm md:text-xl">
                                            <div className="flex space-x-3 items-center">
                                                <img
                                                    className="w-8 h-8"
                                                    src={student?.image}
                                                    width="32"
                                                    height="32"
                                                    alt="John Smith"
                                                />
                                                <span className="whitespace-nowrap">
                                                    {student?.name}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="p-5 text-sm md:text-xl text-center">
                                            {student?.score}
                                        </td>
                                        <td className="p-5 text-sm md:text-xl text-center">
                                            {student?.percentage}
                                        </td>
                                    </tr>
                                ))}

                                {/* <!-- class two --> */}
                                <tr className="bg-white/5">
                                    <td
                                        className="p-5 text-sm md:text-xl"
                                        colSpan="4"
                                    >
                                        Class Two
                                    </td>
                                </tr>
                                {classTwoStudent.map((student) => (
                                    <tr
                                        className="border-b border-[#7ECEB529]"
                                        key={student?.id}
                                    >
                                        <td className="p-5 text-sm md:text-xl">
                                            {student?.id}
                                        </td>
                                        <td className="p-5 text-sm md:text-xl">
                                            <div className="flex space-x-3 items-center">
                                                <img
                                                    className="w-8 h-8"
                                                    src={student?.image}
                                                    width="32"
                                                    height="32"
                                                    alt="John Smith"
                                                />
                                                <span className="whitespace-nowrap">
                                                    {student?.name}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="p-5 text-sm md:text-xl text-center">
                                            {student?.score}
                                        </td>
                                        <td className="p-5 text-sm md:text-xl text-center">
                                            {student?.percentage}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}
