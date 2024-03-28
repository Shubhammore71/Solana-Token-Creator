import React,{FC}  from "react";

type InputViewProps = {
    name: string;
    placeholder: string;
    clickhandle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

export const InputView: FC<InputViewProps> =({placeholder,name,clickhandle})=>
{

    return <div className="mb-4">
        <label
        htmlFor="input-label"
        className="text-base/normal text-default-200 mb-2 block font-semibold">
            {name}
        </label>
        <input
        type="text"
        id="input-label"
        onChange={clickhandle}
        className="border-default-200 block w-full rounded border-white/10 bg-transparent py-1.5 px-3 text-white/80 focus:border-white/25 focus:ring-transparent"
        placeholder={placeholder}
        />
    </div>

}