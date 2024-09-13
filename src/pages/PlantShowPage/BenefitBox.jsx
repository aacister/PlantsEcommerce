import clsx from "clsx";
const BenefitBox = (props) => {
    const {icon, title, description} = props;
    return <div className="flex flex-col items-center px-2 py-4 flex-1">
        <i className={clsx("text-3xl text-emerald-600", icon)} ></i>
        <div className="text-slate-700">{title}</div>
        <div className="text-slate-500 text-sm text-center">{description}</div>
    </div>
};

export default BenefitBox;