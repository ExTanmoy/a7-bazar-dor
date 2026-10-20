// Current Date in Bangladesh Time
export const date = new Date().toLocaleDateString("bn-Bd", {
  dateStyle: "full",
});

// Digit change
const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

// convert Eng digits to Bengali digits
export function toBengaliNumber(num : number | string): string {
    return String(num).replace(/[0-9]/g, (digit) => {
        return bengaliDigits[Number(digit)];
    });
}

// pricing format in bangla using comma
export function formatPrice(price : number): string {
    const formattedPrice = price.toLocaleString('en-IN');
    return toBengaliNumber(formattedPrice);
}

// convert unit into bangla
const unitMap: Record<string, string> = {
  kg: "প্রতি কেজি",
  kilogram: "প্রতি কেজি",
  g: "প্রতি গ্রাম",
  gram: "প্রতি গ্রাম",

  litre: "প্রতি লিটার",
  liter: "প্রতি লিটার",
  l: "প্রতি লিটার",

  ml: "প্রতি মিলিলিটার",
  dozen: "প্রতি ডজন",

  piece: "প্রতি পিস",
  pieces: "প্রতি পিস",
  pc: "প্রতি পিস",
  pcs: "প্রতি পিস",

  "কেজি": "প্রতি কেজি",
  "লিটার": "প্রতি লিটার",
  "ডজন": "প্রতি ডজন",
  "পিস": "প্রতি পিস",

  "প্রতি কেজি": "প্রতি কেজি",
  "প্রতি লিটার": "প্রতি লিটার",
  "প্রতি ডজন": "প্রতি ডজন",
  "প্রতি পিস": "প্রতি পিস",
};

export function getUnitBn(unit: string): string {
  const normalizedUnit = unit.trim().toLowerCase();

  return unitMap[normalizedUnit] ?? `প্রতি ${unit}`;
}
