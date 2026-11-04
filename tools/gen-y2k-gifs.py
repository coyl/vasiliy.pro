#!/usr/bin/env python3
"""Draws the deliberately ugly GIFs for the Y2K birthday theme into i/y2k/.

Everything is original pixel art made here: small native sizes, no antialiasing,
a tiny palette with dithering, so it looks like 1999 on purpose.

    python3 tools/gen-y2k-gifs.py
"""
import math
import os
import random

from PIL import Image, ImageDraw, ImageFont

OUT = os.path.join(os.path.dirname(__file__), "..", "i", "y2k")
COMIC = "/System/Library/Fonts/Supplemental/Comic Sans MS Bold.ttf"
IMPACT = "/System/Library/Fonts/Supplemental/Impact.ttf"
random.seed(1999)


def font(path, size):
    try:
        return ImageFont.truetype(path, size)
    except OSError:
        return ImageFont.load_default_imagefont()


def canvas(w, h, bg=(255, 0, 255)):
    im = Image.new("RGB", (w, h), bg)
    d = ImageDraw.Draw(im)
    d.fontmode = "1"  # no antialiasing: jagged on purpose
    return im, d


def save(name, frames, ms=120, colors=16, transparent_key=None):
    # one palette for every frame, so the transparent index means the same thing throughout
    strip = Image.new("RGB", (sum(f.width for f in frames), frames[0].height))
    x = 0
    for f in frames:
        strip.paste(f, (x, 0))
        x += f.width
    palette = strip.quantize(colors=colors)
    # keyed (transparent) frames stay undithered, or the key colour leaks into the art
    dither = Image.Dither.NONE if transparent_key else Image.Dither.FLOYDSTEINBERG
    pal = [f.quantize(palette=palette, dither=dither) for f in frames]
    kw = dict(save_all=True, append_images=pal[1:], duration=ms, loop=0, disposal=2, optimize=False)
    if transparent_key is not None:
        p = palette.getpalette()[: colors * 3]
        best = min(range(len(p) // 3), key=lambda i: sum((p[i * 3 + k] - transparent_key[k]) ** 2 for k in range(3)))
        kw["transparency"] = best
    pal[0].save(os.path.join(OUT, name), **kw)


def gradient(d, w, h, top, bottom):
    for y in range(h):
        t = y / max(1, h - 1)
        c = tuple(int(top[k] + (bottom[k] - top[k]) * t) for k in range(3))
        d.line([(0, y), (w, y)], fill=c)


def construction():
    frames = []
    f = font(COMIC, 11)
    for i in range(6):
        im, d = canvas(120, 46, (255, 221, 0))
        for x in range(-40, 160, 14):
            o = x + i * 4
            d.polygon([(o, 0), (o + 7, 0), (o - 3, 10), (o - 10, 10)], fill=(0, 0, 0))
            d.polygon([(o, 36), (o + 7, 36), (o - 3, 46), (o - 10, 46)], fill=(0, 0, 0))
        d.rectangle([0, 10, 120, 36], fill=(255, 140, 0))
        d.text((24, 11), "UNDER", font=f, fill=(0, 0, 0))
        d.text((24, 22), "CONSTRUCTION", font=f, fill=(200, 0, 0) if i % 2 else (0, 0, 0))
        # stick worker with a shovel
        x0 = 9
        d.ellipse([x0, 12, x0 + 5, 17], fill=(255, 220, 180), outline=(0, 0, 0))
        d.rectangle([x0 - 1, 11, x0 + 6, 13], fill=(255, 255, 0), outline=(0, 0, 0))
        d.line([(x0 + 2, 17), (x0 + 2, 27)], fill=(0, 0, 255), width=2)
        d.line([(x0 + 2, 27), (x0 - 1, 34)], fill=(0, 0, 0))
        d.line([(x0 + 2, 27), (x0 + 5, 34)], fill=(0, 0, 0))
        up = i % 2 == 0
        d.line([(x0 + 2, 20), (x0 + 9, 18 if up else 25)], fill=(0, 0, 0))
        d.line([(x0 + 9, 18 if up else 25), (x0 + 12, 30 if up else 34)], fill=(120, 60, 0), width=2)
        frames.append(im)
    save("construction.gif", frames, 140)


def new_badge():
    frames = []
    f = font(IMPACT, 14)
    for i in range(4):
        im, d = canvas(44, 30, (255, 0, 255))
        pts = []
        for k in range(16):
            r = 15 if k % 2 == 0 else 10
            a = k * math.pi / 8 + i * 0.2
            pts.append((22 + r * math.cos(a) * 1.4, 15 + r * math.sin(a)))
        d.polygon(pts, fill=[(255, 0, 0), (255, 255, 0), (0, 255, 0), (255, 128, 0)][i], outline=(0, 0, 160))
        d.text((9, 6), "NEW!", font=f, fill=[(255, 255, 0), (255, 0, 0), (0, 0, 255), (255, 255, 255)][i])
        frames.append(im)
    save("new.gif", frames, 180, transparent_key=(255, 0, 255))


def fire():
    w, h = 64, 28
    frames = []
    for i in range(6):
        im, d = canvas(w, h, (255, 0, 255))
        for x in range(0, w, 3):
            hh = 8 + int(10 * abs(math.sin(x * 0.37 + i * 1.3))) + random.randint(0, 6)
            d.polygon([(x - 2, h), (x + 4, h), (x + 1, h - hh)], fill=(255, 40, 0))
            d.polygon([(x - 1, h), (x + 3, h), (x + 1, h - hh * 0.65)], fill=(255, 170, 0))
            d.polygon([(x, h), (x + 2, h), (x + 1, h - hh * 0.3)], fill=(255, 255, 120))
        frames.append(im)
    save("fire.gif", frames, 90, transparent_key=(255, 0, 255))


def globe():
    r = 22
    size = r * 2 + 4
    # crude procedural "continents"
    blobs = [(random.uniform(0, 2 * math.pi), random.uniform(-1.1, 1.1), random.uniform(0.35, 0.8)) for _ in range(9)]
    frames = []
    for i in range(16):
        im, d = canvas(size, size, (255, 0, 255))
        px = im.load()
        phase = i * 2 * math.pi / 16
        for y in range(size):
            for x in range(size):
                dx, dy = (x - size / 2 + 0.5) / r, (y - size / 2 + 0.5) / r
                if dx * dx + dy * dy > 1:
                    continue
                lat = math.asin(dy)
                lon = math.asin(dx / max(0.01, math.cos(lat))) + phase
                land = any(
                    (math.atan2(math.sin(lon - bl), math.cos(lon - bl))) ** 2 + (lat - bt) ** 2 < bs * bs
                    for bl, bt, bs in blobs
                )
                shade = 1 - 0.55 * (dx + 0.4) ** 2 - 0.3 * (dy + 0.3) ** 2
                c = (40, 200, 40) if land else (20, 60, 255)
                px[x, y] = tuple(max(0, min(255, int(v * shade + 30))) for v in c)
        frames.append(im)
    save("globe.gif", frames, 90, colors=12, transparent_key=(255, 0, 255))


def mail():
    frames = []
    f = font(COMIC, 9)
    for i in range(4):
        im, d = canvas(48, 40, (255, 0, 255))
        y = [0, -3, -5, -3][i]
        d.rectangle([6, 10 + y, 42, 30 + y], fill=(255, 255, 255), outline=(0, 0, 0))
        if i % 2:
            d.polygon([(6, 10 + y), (24, 1 + y), (42, 10 + y)], fill=(255, 255, 180), outline=(0, 0, 0))
        else:
            d.line([(6, 10 + y), (24, 22 + y), (42, 10 + y)], fill=(0, 0, 0))
        d.text((7, 30), "e-mail me!", font=f, fill=[(255, 0, 0), (0, 0, 255)][i % 2])
        frames.append(im)
    save("mail.gif", frames, 160, transparent_key=(255, 0, 255))


def cake():
    frames = []
    for i in range(4):
        im, d = canvas(48, 44, (255, 0, 255))
        d.rectangle([6, 26, 42, 40], fill=(240, 120, 200), outline=(120, 0, 80))
        d.rectangle([10, 16, 38, 26], fill=(255, 230, 240), outline=(120, 0, 80))
        for x in range(8, 42, 4):
            d.ellipse([x, 24, x + 4, 29], fill=(255, 255, 255))
        for k, x in enumerate((14, 20, 26, 32)):
            d.rectangle([x, 8, x + 2, 16], fill=[(255, 0, 0), (0, 160, 255), (0, 200, 0), (255, 200, 0)][k])
            fl = (i + k) % 2
            d.ellipse([x - 1, 2 + fl, x + 3, 8], fill=(255, 200 - 80 * fl, 0))
        frames.append(im)
    save("cake.gif", frames, 150, transparent_key=(255, 0, 255))


def rainbow_hr():
    w, h = 300, 8
    frames = []
    cols = [(255, 0, 0), (255, 128, 0), (255, 255, 0), (0, 255, 0), (0, 255, 255), (0, 0, 255), (255, 0, 255)]
    for i in range(7):
        im, d = canvas(w, h)
        for x in range(0, w, 10):
            d.rectangle([x, 0, x + 10, h], fill=cols[(x // 10 + i) % len(cols)])
        frames.append(im)
    save("hr.gif", frames, 100, colors=8)


def background():
    im, d = canvas(64, 64, (16, 0, 64))
    for _ in range(14):
        x, y = random.randint(0, 63), random.randint(0, 63)
        c = random.choice([(255, 255, 255), (255, 255, 0), (0, 255, 255), (255, 0, 255)])
        d.point((x, y), fill=c)
    d.line([(20, 30), (26, 30)], fill=(255, 255, 0))
    d.line([(23, 27), (23, 33)], fill=(255, 255, 0))
    d.line([(48, 8), (50, 8)], fill=(0, 255, 255))
    d.line([(49, 7), (49, 9)], fill=(0, 255, 255))
    im.quantize(colors=8).save(os.path.join(OUT, "bg.gif"))


def button(name, lines, bg, fg, blink=None):
    frames = []
    f = font(COMIC, 9)
    for i in range(2 if blink else 1):
        im, d = canvas(88, 31, bg)
        gradient(d, 88, 31, bg, tuple(max(0, v - 90) for v in bg))
        d.rectangle([0, 0, 87, 30], outline=(255, 255, 255))
        d.line([(0, 30), (87, 30)], fill=(0, 0, 0))
        d.line([(87, 0), (87, 30)], fill=(0, 0, 0))
        for k, t in enumerate(lines):
            col = blink if (blink and i == 1 and k == 0) else fg
            tw = d.textlength(t, font=f)
            d.text(((88 - tw) / 2, 3 + k * 12), t, font=f, fill=col)
        frames.append(im)
    save(name, frames, 500)


def main():
    os.makedirs(OUT, exist_ok=True)
    construction()
    new_badge()
    fire()
    globe()
    mail()
    cake()
    rainbow_hr()
    background()
    button("b-comic.gif", ["COMIC SANS", "inside!"], (255, 80, 0), (255, 255, 0), blink=(0, 0, 255))
    button("b-notepad.gif", ["Made with", "NOTEPAD"], (0, 120, 0), (255, 255, 255))
    button("b-800.gif", ["800 x 600", "best viewed"], (0, 0, 180), (0, 255, 255), blink=(255, 255, 0))
    button("b-y2k.gif", ["Y2K", "COMPLIANT"], (120, 0, 160), (255, 255, 255), blink=(255, 0, 0))
    print("wrote", sorted(os.listdir(OUT)))


if __name__ == "__main__":
    main()
