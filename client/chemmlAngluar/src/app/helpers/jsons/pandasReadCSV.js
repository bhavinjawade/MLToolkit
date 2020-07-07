export default{
  name: 'pandas',
  docstring: '',
  inputs: [],
  outputs: [],
  node_functions: [
    {
      name: 'read_csv',
      docstring: '\nRead a comma-separated values (csv) file into DataFrame.',
      inputs: [
        {
          name: 'filepath_or_buffer',
          docstring: 'Choose a CSV file to upload.',
          param_type: ['object', 'str'],
          expected_shape: null,
          is_optional: false,
          default_value: null,
          options: null
        },
        {
          name: 'sep',
          docstring: 'Delimiter to use. Use \\s+ for whitespace',
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: ',',
          options: null
        },
        {
          name: 'header',
          docstring:
            'Row number(s) to use as the column names, and the start of the data.  Default behavior is to infer the column names: if no names are passed the behavior is identical to ``header=0`` and column names are inferred from the first line of the file, if column names are passed explicitly then the behavior is identical to ``header=None``. Explicitly pass ``header=0`` to be able to replace existing names. The header can be a list of integers that specify row locations for a multi-index on the columns e.g. [0,1,3]. Intervening rows that are not specified will be skipped (e.g. 2 in this example is skipped). Note that this parameter ignores commented lines and empty lines if ``skip_blank_lines=True``, so ``header=0`` denotes the first line of data rather than the first line of the file.',
          param_type: ['int', 'list'],
          expected_shape: null,
          is_optional: true,
          default_value: 'infer',
          options: null
        },
        {
          name: 'names',
          docstring:
            'List of column names to use. If file contains no header row, then you should explicitly pass ``header=None``. Duplicates in this list are not allowed.',
          param_type: ['array'],
          expected_shape: null,
          is_optional: true,
          default_value: null,
          options: null
        },
        {
          name: 'index_col',
          docstring:
            'Column(s) to use as the row labels of the ``DataFrame``, either given as string name or column index. If a sequence of int / str is given, a MultiIndex is used.  Note: ``index_col=False`` can be used to force pandas to *not* use the first column as the index, e.g. when you have a malformed file with delimiters at the end of each line.',
          param_type: ['int', 'str', null],
          expected_shape: null,
          is_optional: true,
          default_value: '``None``',
          options: null
        },
        {
          name: 'usecols',
          docstring:
            "Return a subset of the columns. If list-like, all elements must either be positional (i.e. integer indices into the document columns) or strings that correspond to column names provided either by the user in `names` or inferred from the document header row(s). For example, a valid list-like `usecols` parameter would be ``[0, 1, 2]`` or ``['foo', 'bar', 'baz']``. Element order is ignored, so ``usecols=[0, 1]`` is the same as ``[1, 0]``.",
          param_type: ['list', 'callable'],
          expected_shape: null,
          is_optional: true,
          default_value: null,
          options: null
        },
        {
          name: 'mangle_dupe_cols',
          docstring:
            "Duplicate columns will be specified as 'X', 'X.1', ...'X.N', rather than 'X'...'X'. Passing in False will cause data to be overwritten if there are duplicate names in the columns.",
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True',
          options: null
        },
        {
          name: 'skiprows',
          docstring:
            'Line numbers to skip (0-indexed) or number of lines to skip (int) at the start of the file. By default no rows are skipped',
          param_type: ['int', 'list', 'callable'],
          expected_shape: null,
          is_optional: true,
          default_value: null,
          options: null
        },
        {
          name: 'skipfooter',
          docstring:
            "Number of lines at bottom of file to skip (Unsupported with engine='c').",
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: '0',
          options: null
        },
        {
          name: 'nrows',
          docstring:
            'Number of rows of file to read. Useful for reading pieces of large files.',
          param_type: ['int'],
          expected_shape: null,
          is_optional: true,
          default_value: null,
          options: null
        },
        {
          name: 'na_values',
          docstring:
            "Additional strings to recognize as NA/NaN. If dict passed, specific per-column NA values.  By default the following values are interpreted as NaN: '', '#N/A', '#N/A N/A', '#NA', '-1.#IND', '-1.#QNAN', '-NaN', '-nan', '1.#IND', '1.#QNAN', 'N/A', 'NA', 'NULL', 'NaN', 'n/a', 'nan', 'null'.",
          param_type: ['str', 'dict', 'list'],
          expected_shape: null,
          is_optional: true,
          default_value: null,
          options: null
        },
        {
          name: 'keep_default_na',
          docstring:
            'Whether or not to include the default NaN values when parsing the data. Depending on whether `na_values` is passed in, the behavior is as follows:  * If `keep_default_na` is True, and `na_values` are specified, `na_values`   is appended to the default NaN values used for parsing. * If `keep_default_na` is True, and `na_values` are not specified, only   the default NaN values are used for parsing. * If `keep_default_na` is False, and `na_values` are specified, only   the NaN values specified `na_values` are used for parsing. * If `keep_default_na` is False, and `na_values` are not specified, no   strings will be parsed as NaN.  Note that if `na_filter` is passed in as False, the `keep_default_na` and `na_values` parameters will be ignored.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True',
          options: null
        },
        {
          name: 'na_filter',
          docstring:
            'Detect missing value markers (empty strings and the value of na_values). In data without any NAs, passing na_filter=False can improve the performance of reading a large file.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True',
          options: null
        },
        {
          name: 'skip_blank_lines',
          docstring:
            'If True, skip over blank lines rather than interpreting as NaN values.',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: 'True',
          options: null
        },
        {
          name: 'compression',
          docstring:
            "For on-the-fly decompression of on-disk data. If 'infer' and `filepath_or_buffer` is path-like, then detect compression from the following extensions: '.gz', '.bz2', '.zip', or '.xz' (otherwise no decompression). If using 'zip', the ZIP file must contain only one data file to be read in. Set to None for no decompression.  .. versionadded:: 0.18.1 support for 'zip' and 'xz' compression.",
          param_type: ['LIST_VALID_OPTIONS', null],
          expected_shape: null,
          is_optional: true,
          default_value: 'infer',
          options: ['infer', 'gzip', 'bz2', 'zip', 'xz', 'None']
        },
        {
          name: 'thousands',
          docstring: 'Thousands separator.',
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null,
          options: null
        },
        {
          name: 'decimal',
          docstring:
            "Character to recognize as decimal point (e.g. use ',' for European data).",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: '.',
          options: null
        },
        {
          name: 'comment',
          docstring:
            "Indicates remainder of line should not be parsed. If found at the beginning of a line, the line will be ignored altogether. This parameter must be a single character. Like empty lines (as long as ``skip_blank_lines=True``), fully commented lines are ignored by the parameter `header` but not by `skiprows`. For example, if ``comment='#'``, parsing ``#empty\\na,b,c\\n1,2,3`` with ``header=0`` will result in 'a,b,c' being treated as the header.",
          param_type: ['str'],
          expected_shape: null,
          is_optional: true,
          default_value: null,
          options: null
        },
        {
          name: 'obj',
          docstring:
            'True/False flag to indicate reusing the same instance instead of creating a new one',
          param_type: ['bool'],
          expected_shape: null,
          is_optional: true,
          default_value: false,
          options: null
        }
      ],
      outputs: [
        {
          name: 'data',
          docstring:
            'A comma-separated values (csv) file is returned as two-dimensional data structure with labeled axes.',
          param_type: ['dataframe'],
          returned: true
        },
        {
          name: 'obj',
          docstring:
            'True/False flag to indicate reusing the same instance instead of creating a new one',
          param_type: ['bool'],
          returned: true
        }
      ]
    }
  ],
  nodes: [],
  library: 'pandas',
  module: null
}
