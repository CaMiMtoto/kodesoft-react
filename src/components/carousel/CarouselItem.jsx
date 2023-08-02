import PropTypes from "prop-types";
import _ from "lodash";

CarouselItem.propTypes = {
    itemCount: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
};

export default function CarouselItem({itemCount, name, position}) {
    let filledStars = _.range(0, itemCount);
    let unFilledStarts = _.range(0, 5 - itemCount);
    return <div className="carousel-cell px-20">
        <div className="flex justify-between my-5">
            <span className="bi bi-quote"></span>
            <div className="flex gap-4">
                {filledStars.map((value, index) => (
                    <i key={'filled_' + index} className="bi bi-star-fill text-warning"></i>))}
                {unFilledStarts.map((value, index) => (
                    <i key={'filled_' + index} className="bi bi-star text-warning"></i>))}
            </div>
        </div>
        <blockquote className="text-gray-200 leading-loose italic">
            Working with Kodesoft was a fantastic experience. Their professionalism, expertise,
            and attention to detail resulted in a remarkable software solution. They were
            responsive, communicated effectively, and delivered a high-quality product that
            exceeded our expectations. I highly recommend Kodesoft for any software development
            needs.

        </blockquote>
        <div className="flex items-center gap-4 my-5">
            <div className="bg-primary-light h-12 w-12 rounded-full flex-shrink-0"></div>
            <div>
                <h4 className="text-white font-semibold text-xl">{name}</h4>
                <div>
                    <span className="text-gray-300">{position}</span>
                </div>
            </div>
        </div>
    </div>;
}

