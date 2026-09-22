import process from "node:process";

import { cutil } from "@ghasemkiani/base";
import { Component } from "@ghasemkiani/webc";

class Clicky extends Component {
  static {
    this.is("gk-clicky");
    cutil.extend(this.prototype, {
      _id: null,
    });
  }
  get id() {
		if (cutil.na(this._id)) {
			this._id = process.env["CLICKY_ID"];
		}
		return this._id;
	}
	set id(id) {
		this._id = id;
	}
  create({ x, node }) {
    const cmp = this;
    x.ch(node, "script[async=async,src=https://static.getclicky.com/js]", node => {
      x.attr(node, "data-id", id);
    });
  }
}

export { Clicky };
