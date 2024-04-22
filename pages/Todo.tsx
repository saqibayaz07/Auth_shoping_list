import React from 'react'

export default function Todo() {
    return (<>
        <div className="max-w-screen-xl m-auto px-10 py-14">
            <div className="flex flex-wrap justify-between ">
                <div
                    style={{
                        background:
                            "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,195,233,0.41220238095238093) 100%)"
                    }}
                    className="rounded-[30px] p-6"
                >
                    <h1 className="text-center font-bold text-5xl text-[#FFFFFFCC]">
                        Shoping List
                    </h1>
                    <div className=" flex gap-3 my-10">
                        <input
                            type="text"
                            placeholder="Title..."
                            className="placeholder:text-black w-48 outline-none rounded py-2 px-3 bg-[#FFFFFF99] text-black "
                        />
                        <input
                            type="text"
                            // placeholder={14}
                            className="placeholder:text-black w-16 outline-none py-2 px-3 bg-[#FFFFFF99] rounded "
                        />
                        <button className="px-8 py-2 rounded-md text-[#FFD700] border-[2px] border-[#FFD700]">
                            Add
                        </button>
                    </div>
                    <div className="flex justify-between pb-2 px-3 border-b border-[#FFD700] mb-4">
                        <div>
                            <span className="text-black bg-[#FFD700] rounded p-1 ">14</span>
                            <span className="font-normal text-xl ml-7 text-[#FFFFFFCC]">
                                Buy Bananas
                            </span>
                        </div>
                        <div>
                            <span className="text-[#FFD700]">X</span>
                        </div>
                    </div>
                    <div className="flex justify-between pb-2 px-3 border-b border-[#FFD700] mb-4">
                        <div>
                            <span className="text-black bg-[#FFD700] rounded p-1 ">14</span>
                            <span className="font-normal text-xl ml-7 text-[#FFFFFFCC]">
                                Buy Bananas
                            </span>
                        </div>
                        <div>
                            <span className="text-[#FFD700]">X</span>
                        </div>
                    </div>
                    <div className="flex justify-between pb-2 px-3 border-b border-[#FFD700] mb-4">
                        <div>
                            <span className="text-black bg-[#FFD700] rounded p-1 ">14</span>
                            <span className="font-normal text-xl ml-7 text-[#FFFFFFCC]">
                                Buy Bananas
                            </span>
                        </div>
                        <div>
                            <span className="text-[#FFD700]">X</span>
                        </div>
                    </div>
                    <div className="flex justify-between pb-2 px-3 border-b border-[#FFD700] mb-4">
                        <div>
                            <span className="text-black bg-[#FFD700] rounded p-1 ">14</span>
                            <span className="font-normal text-xl ml-7 text-[#FFFFFFCC]">
                                Buy Bananas
                            </span>
                        </div>
                        <div>
                            <span className="text-[#FFD700]">X</span>
                        </div>
                    </div>
                </div>
                <div className="w-2/4">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/168a/9d8b/fa64d04296099b2d2efc64d7ba7a2188?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZN9qUESgUnguHGECW7Z9Xr~xa793W13Hv9LGJrS7gsZ0wnoy7gn5tKkj44oNzkVUGJpPD-Ycgvp2A3ZkZ1Y1ff9jSlD5IY-9zp8WluLPvWoL83ves2hLp5uYyop7I0v0PabkvTKbRiOnnPEAynGsTntd30QV0sDZ4o5GzIeQkIygbE0IceL174njb1mVr8lNdPfBroWjXpUL5YDkzvI~~sWsAATRHC9quhFbf-41sY2ha4KfEzjBHX63IRsyyzEAePBPXCSuejzWvDN0gCltWvPQhqtyZ-QmB7qOpU9LbDEcAUQCg2cnwAY-30Dhq-WL0dRG7Rr7hw6owhL~ri2CBA__"
                        alt=""
                    />
                </div>
            </div>
        </div>

    </>

    )
}





