import { TrashIcon, WrapIcon, ESizeWrapIcon } from "@/src/components/Icons";
import { ImageWrap } from "@src/components/ImageWrap";
import image from "@accets/img/image.png";

export default function appPage() {
  return (
    <>
      {" "}
      <h1 style={{ paddingBottom: 'var(--space-md)' }}>Заголовок первого уровня</h1>
      <h2>Заголовок второго уровня</h2>
      <h3>Заголовок третьего уровня</h3>
      <p>
        <span style={{ fontSize: "var(--text-xs)" }}>var(--text-xs)</span>
      </p>
      <p>
        <span style={{ fontSize: "var(--text-sm)" }}>var(--text-sm)</span>
      </p>
      <p>
        <span style={{ fontSize: "var(--text)" }}>var(--text-st)</span>
      </p>
      <p>
        <span style={{ fontSize: "var(--text-lg)" }}>var(--text-lg)</span>
      </p>
      <p>
        <span style={{ fontSize: "var(--text-xl)" }}>var(--text-xl)</span>
      </p>
      <p>
        <span style={{ fontSize: "var(--text-xxl)" }}>var(--text-xxl)</span>
      </p>
      <p>
        <span style={{ fontSize: "var(--text-xxxl)" }}>var(--text-xxxl)</span>
      </p>
      <WrapIcon size={ESizeWrapIcon.SMALL}>
        <TrashIcon />
      </WrapIcon>
      <WrapIcon size={ESizeWrapIcon.AVERAGE}>
        <TrashIcon />
      </WrapIcon>
      <WrapIcon size={ESizeWrapIcon.BIG}>
        <TrashIcon />
      </WrapIcon>
      <div
        style={{
          width: 500,
          height: 500,
          position: "relative",
          border: "1px solid red",
        }}
      >
        <ImageWrap alt="test alt" fill={true} image={image} />
      </div>
      <button>кнопка</button>
      <br />
      <button disabled>кнопка </button>
    </>
  );
}
