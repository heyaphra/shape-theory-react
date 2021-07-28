import React, { Component } from "react";
import { Canvas } from "../Canvas";
import { Line, MerrickColorModel } from "./constants";
import { distributePolar } from "./util";
const { Note } = require("@tonaljs/tonal");

class PitchCircle extends Component {
    selection = {};
    _points = [];
    _lines = [];

    init = async (stage) => {
        const { data } = this.props;
        this.stage = stage;
        this.draw();
        if(data) {
            this.trace(data);
        }
    };

    draw = () => {
        const { ctx, width, height } = this.stage;
        ctx.clearRect(0, 0, width, height);
        if (!this._points.length) {
            this._points = distributePolar({
                ctx,
                cx: width / 2,
                cy: height / 2,
                r: height / 2.25,
                N_NOTES: 12,
                colorModel: MerrickColorModel,
            });
        }
        this._points.forEach((p) => p.draw(ctx));
        this._lines.forEach((l) => l.draw(ctx));
        if (this._tmp_line) this._tmp_line.draw(ctx);
    };

    trace = (noteSource) => {
        const nodes = noteSource.map((note, index) =>
            this._points.find((p) => {
                return p.noteName === note || p.noteName === Note.enharmonic(note)
            })
        );
        const nextLines = nodes.map((p, i) => {
            return new Line(
                { head: p, tail: nodes[(i + 1) % nodes.length] },
                this.stage.ctx
            );
        });
        this._lines = nextLines;
        this.draw();
    };

    onResize = async (stage) => {
        this.stage = stage;
        this.draw();
    };

    render() {
        const { dimensions, style } = this.props;
        return (
            <Canvas
                onMount={this.init}
                onResize={this.onResize}
                refreshRate={0}
                style={style}
            />
        );
    }
}

export { PitchCircle };